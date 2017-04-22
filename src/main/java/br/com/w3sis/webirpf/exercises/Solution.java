package br.com.w3sis.webirpf.exercises;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {

	public static void main(String[] args) throws Exception {

		BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
		String QtdStones = null;
		try {
			QtdStones = buffer.readLine();
			if (!isNumeric(QtdStones)) {
				throw new Exception("Is not an int number !");
			}
		} catch (IOException ioe) {
			throw new Exception("IO error trying to read your number!");
		}

		List<String> stones = new ArrayList<>();
		Integer val = Integer.parseInt(QtdStones);

		for (int i = 1; i <= val; i++) {
			BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
			String stone = new String();
			try {
				stone = bf.readLine();
			} catch (IOException ioe) {
				System.out.println("IO error trying to read your elements!");
				System.exit(1);
			}
			stones.add(stone);
		}
		Long init = System.currentTimeMillis();
		System.out.println(countPrecious(stones));
		Long end = System.currentTimeMillis();
		System.out.println("Finished in " + (end - init) + " ms");
	}

	private static Integer countPrecious(List<String> stones) {
		List<Character> precious = new ArrayList<>();
		List<Character> ordinary = new ArrayList<>();
		for (int actual = 0; actual <= stones.size() - 1; actual++) {
			List<Character> elements = stones.get(actual).chars().mapToObj(e -> (char) e).collect(Collectors.toList());
			for (int i = 0; i <= elements.size() - 1; i++) {
				boolean isPrecious = false;
				for (int idx = 0; idx <= stones.size() - 1; idx++) {
					if (actual != idx) {
						if (!precious.contains(elements.get(i)) && !ordinary.contains(elements.get(i))) {
							isPrecious = true;
							if (stones.get(idx).indexOf(elements.get(i)) == -1) {
								isPrecious = false;
								ordinary.add(elements.get(i));
								break;
							}
						}
					}
				}
				if (isPrecious) {
					precious.add(elements.get(i));
				}
			}
		}
		return precious.size();
	}

	private static boolean isNumeric(String str) {
		try {
			@SuppressWarnings("unused")
			Integer d = Integer.parseInt(str);
		} catch (NumberFormatException nfe) {
			return false;
		}
		return true;
	}
}
